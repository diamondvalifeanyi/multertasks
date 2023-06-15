const express = require('express');
const route = express.Router();
const { createProfile, getProfiles, getProfile, updateProfile, deleteProfile} = require("../Controller/famController")
const upload = require("../util/multer")

route.post( '/profiles', upload.fields( [ { name: "childrenImage", maxCount: 10 } ] ), createProfile );
route.get( '/profiles', getProfiles );
route.get( '/profiles/:id', getProfile );
route.put( '/profiles/:id', upload.fields( [ { name: "ChildrenImage", maxCount: 10 } ] ), updateProfile );
route.delete( '/profiles/:id', deleteProfile );














module.exports = route