((btn) => {

    if (btn) {
        
        btn.addEventListener('click', () => {

            request('/api', { "entity": 'aes', "module": 'create', "params": { "client": document.baseURI } }, helper, false)

        })

    }

})(document.getElementById('btnCreate'));