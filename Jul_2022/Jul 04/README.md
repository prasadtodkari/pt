## Jul-04, 2022

# Introduction to Meta Data = meta
    - Website without meta will work but with meta it will be better.
    - most common used meta charset need to be used is *UTF-8*.
    - UTF-8 mostly not work with japenese and chinese companies.

    - *http-equip* "X-UA-Compatible" content="IE-edge"

    - *viewport* content="width=device-width, initial-scale=1.0"

# JavaScript data type
    - string
    - number
    - boolean
    - bigint (n at end of any number convert number to bifint)
    - array (object)

# Introduction to Object
    - array is object in javascript
    - object value can assign to object key(property) by specifying :
    - Object inside object(array) is definetly possible.
        example of object
        let user_data{
            'name'      : 'abcd',
            'age'       : 35;
            'is_active' : true
        };
    - object also stored function data.

    # How to access any spcific value of object
    - example console.log(object_name[key]); // when key is a variable.
    - also you can call as console.log(object_name.key);

    # console is also also a object basically it is a Global object.

    ### object document
    - this available globally 
    - purpose of this is to be able to connect to the html code using js.
    - changing HTML using js is called DOM manuplation.