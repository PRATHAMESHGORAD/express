const rmodel = require('../model/rmodel');
const umodel = require('../model/umodel');
const bcryptjs = require('bcryptjs');
const logger = require('../utils/logger');

// Add Room Form
const addform = (req, res) => {
    logger.info("Add room page opened");
    res.render("add");
    
};

// Show Rooms
const showRoom = async (req, res) => {

    if (!req.session.name) {
        logger.warn("Unauthorized access to showRoom");
        return res.redirect("/login");
    }

    try {

        const data = await rmodel.find();

        logger.info(
            `${req.session.name} viewed rooms`
        );

        res.render("show", {
            data,
            username: req.session.name
        });

    } catch (error) {

        logger.error(
            `Show Room Error: ${error.message}`
        );

        res.send("Error loading rooms");
    }
};

// Add Room
const addRoom = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
 
    
    
    
    

    try {

        const data = new rmodel({
            roomnumber: req.body.roomnumber,
            roomtype: req.body.roomtype,
            pricepernight: req.body.pricepernight,
            capacity: req.body.capacity,
            image:req.file.filename
        });

        await data.save();

        logger.info(
            `Room ${req.body.roomnumber} created`
        );

        res.redirect("/showRoom");

    } catch (error) {

        logger.error(
            `Add Room Error: ${error.message}`
        );

        if (error.code === 11000) {
            return res.send("Room number already exists");
        }

        res.send("Failed to add room");
    }
};

// Delete Room
const deleteRoom = async (req, res) => {

    try {

        const room = await rmodel.findById(req.params.id);

        await rmodel.findByIdAndDelete(req.params.id);

        logger.info(
            `Room ${room.roomnumber} deleted`
        );

        res.redirect("/showRoom");

    } catch (error) {

        logger.error(
            `Delete Room Error: ${error.message}`
        );

        res.send("Failed to delete room");
    }
};

// Update Room
const updateRoom = async (req, res) => {

    try {

        await rmodel.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        logger.info(
            `Room updated: ${req.params.id}`
        );

        res.redirect("/showRoom");

    } catch (error) {

        logger.error(
            `Update Room Error: ${error.message}`
        );

        res.send("Failed to update room");
    }
};

// Edit Form
const editform = async (req, res) => {

    try {

        const data = await rmodel.findById(req.params.id);

        logger.info(
            `Edit room page opened: ${req.params.id}`
        );

        res.render("edit", { data });

    } catch (error) {

        logger.error(
            `Edit Form Error: ${error.message}`
        );

        res.send("Failed to open edit page");
    }
};

// Register
const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const hashpassword = await bcryptjs.hash(password, 10);

        await umodel.create({
            name,
            email,
            password: hashpassword
        });

        logger.info(
            `New user registered: ${name}`
        );

        res.redirect("/login");

    } catch (error) {

        logger.error(
            `Register Error: ${error.message}`
        );

        res.send("Registration failed");
    }
};

// Login
const login = async (req, res) => {

    try {

        const { name, password } = req.body;

        const user = await umodel.findOne({ name });

        if (
            user &&
            await bcryptjs.compare(
                password,
                user.password
            )
        ) {

            req.session.name = name;

            logger.info(
                `${user.name} logged in successfully`
            );

            return res.redirect("/showRoom");
        }

        logger.warn(
            `Failed login attempt for ${name}`
        );

        res.redirect("/login");

    } catch (error) {

        logger.error(
            `Login Error: ${error.message}`
        );

        res.send("Login failed");
    }
};

// Logout
const logout = (req, res) => {

    logger.info(
        `${req.session.name} logged out`
    );

    req.session.destroy(() => {
        res.redirect("/login");
    });
};

module.exports = {
    addform,
    showRoom,
    addRoom,
    deleteRoom,
    updateRoom,
    editform,
    register,
    login,
    logout
};