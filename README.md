# unDude
Read all usernames, devices and passwords in a [MikroTik](http://www.mikrotik.com/) - [The Dude](http://www.mikrotik.com/thedude) database.

## Install

    git clone https://github.com/dobladov/unDude.git
    cd unDude
    npm install

## Usage

    node undude.js dude.db

## Filter

Filter devices or admins with grep

    node undude.js dude.db | grep Admin
    node undude.js dude.db | grep Device


### About

This software is for recovery purpose in your own databases, I'm not responsible for any other use.

Never store your passwords unencrypted, they can be exposed.

![exposed](http://i.imgur.com/0ZoAyLW.gif)
