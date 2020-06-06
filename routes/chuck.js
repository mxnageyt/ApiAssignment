const axios = require("axios");
const express = require("express");

exports.chuck = async (request, response) => {
  let uri = `https://api.chucknorris.io/jokes/random`;

  try {
    let { data } = await axios({
      url: uri,
      method: "GET",
    });
    response.send(data);
  } catch (e) {
    response.send(e);
  }
};
