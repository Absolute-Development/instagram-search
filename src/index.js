const fetch = require("node-fetch");

module.exports = async (input, options = {}) => {
    if (!input) throw new Error("Input is a required argument");

    if (typeof options === "string") options = { user: "outpex" };

    const user = "user" in options ? options.user : "outpex";

    const { res } = await await fetch(`https://instagram.com/${user}/`).then(response => response.json());

    if (!res.ok) throw new Error(res.statusText);

    const { key } = await res.json();

    return res;
};
