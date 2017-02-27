/** Created by azder on 2017-02-27. */

'use strict'; // ALWAYS

const phin = require('phin');

module.exports = (

    options =>
        new Promise(
            (resolve, reject) =>
                phin(
                    options,
                    (error, body, response) =>
                        error ? reject(error) : resolve(body, response)
                ) // phin
        ) // new Promise()

);
