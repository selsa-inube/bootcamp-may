const url = "https://eloquentjavascript.net/author";
const types = ["text/plain",
    "text/html",
    "application/json",
    "application/rainbows+unicorns"];

const showTypes = async () => {
    for (let type of types) {
        let resp = await fetch(url, { headers: { accept: type } });
        console.log(`${type}: ${await resp.text()}`);
    }
}

showTypes();