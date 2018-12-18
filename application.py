#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Dec 17 18:44:58 2018
Project 2. Flack

Objectives:
- Learn to use JavaScript to run code server-side.
- Become more comfortable with building web user interfaces.
- Gain experience with Socket.IO to communicate between clients and servers.

@author: chepson
"""

import os
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

# list of users with accounts
users = []

@app.route("/")
def index():
    return render_template("index.html", error = {}, users = users)
