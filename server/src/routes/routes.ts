import express from "express";
import api from "../api";
import {IUser, IUserDocument} from "../../db/mongo/models/user/types";


const routes = (app: express.Application) => {
    app.get('/', async (req, res) => {
        res.send('works');
    });
    // добавить тестовых пользователей, компаний и тд
    app.get('/mock', async (req, res) => {
        try {
            await api.addMock();
            res.send('ok');
        } catch (e) {
            console.log(e);
            res.status(400).send('не получилось, не фортануло');
        }

    });
    // auth
    app.post('/api/login', async (req, res) => {
        const {phone} = req.body;
        try {
            const result = await api.loginUser(phone);
            res.send(result);
        } catch (err) {
            console.log(err.message);
            res.status(401).send(err.message);
        }
    });
    app.post('/api/signUp', async (req, res) => {
        const {phone} = req.body;
        try {
            const user : IUserDocument = await api.signUpUser(phone);
            res.send(user);
        } catch (err) {
            console.log(err.message);
            res.status(401).send(err.message);
        }
    });

    app.post('/api/device', async (req, res) => {
        try {
            const device = await api.addDevice(req.body);
            res.send(device);
        } catch (err) {
            console.log(err.message);
            res.status(401).send(err.message);
        }
    });

    app.get('/api/device/:_id', async (req, res) => {
        try {
            const { _id } =  req.params;
            const device = await api.getDevice(_id);
            res.send(device);
        } catch (err) {
            console.log(err.message);
            res.status(401).send(err.message);
        }
    });

    app.post('/api/sos', async (req, res) => {
        try {
            const result = await api.sos(req.body);
            res.send(result);
        } catch (err) {
            console.log(err.message);
            res.status(401).send(err.message);
        }
    });

};

export default routes;
