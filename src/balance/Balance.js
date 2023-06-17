class Balance {
    #balance;
    
    constructor(balance = 1_000_000) {
        this.#balance = balance 
    }
    
    transfer (User, Value) {
        if (User == 'Admon') return 
    }

    get consult () { 
        const formatter = new Intl
        .NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD',
                minimumFractionDigits: 0, 
                maximumFractionDigits: 0 
    }) // formatter


        // format balance  
        const formatted = formatter.format(this.#balance)
        
        //  draw a line         
        const terminalWidth = process.stdout.columns
        let line = "_".repeat(terminalWidth)
        if (!line) line = '_'.repeat(30)

        // output
        console.log(line)
        console.log('ACTUAL BALANCE')
        return console.log(formatted, 'COP')
    }
}; export const balance = new Balance()

// test
// balance.consult