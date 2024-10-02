import { TypeAnimation } from "react-type-animation";

const TypingAnim  = () => {
    return (
        <TypeAnimation
           sequence={[
            //same substring at the start will only be typed once, initially
            "Chat with Your Own AI",
            1000,
            "Built With OpenAI 🤖",
            2000,
            "Your Own Customized ChatGPT 💻",
            1500,
           ]}
           speed={50}
           style={{
            fontSize: "60px",
            color: "white",
            display: "inline-block",
            textShadow: "1px 1px 20px #000",
           }}
           repeat={Infinity}

        />
    )
}

export default TypingAnim;