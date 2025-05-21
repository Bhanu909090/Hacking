const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + Math.ceil(Math.random() * 6) * 1000;
        setTimeout(() => {
            resolve();
        }, timeout);
    })
}

async function main() {
    setInterval(() => {
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        }
        else{
            last.innerHTML += ".";
        }
    }, 70);
    let text = ["Initializing hacking",
        "Hello Snehitha Philip",
        "I am a hacker",
        "I am here to steal your money",
        "Connecting to your bank server",
        "Bypassing firewall",
        "Reading your data",
        "Processing your bank account details",
        "Found one account in HDFC Bank",
        "Bypassing security protocols",
        "Accessing your bank account",
        "Transferring funds",
        "Almost there",
        "Success! Funds transferred",
        "Thank you , Ummaahhh"
    ]

    const addItem = async (item) => {
        await randomDelay();
        let div = document.createElement("div");
        div.innerHTML = item;
        document.body.append(div)
    }

    for (const item of text) {
        await addItem(item)
    }
}
main()



