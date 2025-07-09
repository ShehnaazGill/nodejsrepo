// export let x = 10 // Gives an error

//////// CORRECT WAY TO EXPORT

module.exports = {
    a : 10,
    b : 20,
    c :function(){
        return 'thia is a function'
    }
}