module.exports = queryToParse => {

    let error = queryToParse.toUpperCase().substring(0, 6) != 'SELECT'
        , forbidden = [ // #issue: deverá vir do config e pensar em melhorias, exemplo * pode?

            'drop',
            'create',
            'exec',
            'update',
            'delete',
            'insert',
            'sp_'

        ]

    !error ? () => {

        let wordsToparse = queryToParse.split(' ')
            , err = []

        for (let word in wordsToparse) { err.push(forbidden.indexOf(wordsToparse[word]) > 0) }

        return error = err.filter(err => { let error; if (err) { error = true } return error })

    } : false


    return error

}