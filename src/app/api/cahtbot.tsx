type MessageResponse = {
    response: string
}

export async function getSantaMessage(message: string): Promise<string> {
    console.log(JSON.stringify({ message }));
    const santaMessage = await fetch("https://116.82.203.135/", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ message })
    })
    .then((res) => res.json())
    .catch((e) => console.log(e));
    console.log(santaMessage);
    if(santaMessage) {
        return santaMessage.response;
    } else {
        return "サンタさん少し休ませて"
    }
    
}