import {Button} from "../components/Buttons/Button.tsx";

export const TestPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>
                <Button title={"TestValue"}></Button>
                <p>
                    TestText
                    TestText
                    <b>TestText</b>
                </p>

                <small><b>TestText</b></small>
            </div>

            <div className={"v-panel b-hori b-w-fill"}>
                <p> TestText 1</p>
                <p> TestText 2</p>
                <p> TestText 3</p>
            </div>
            <div className={"v-panel-2 b-vert"}>
                <p> TestText 1</p>
                <p> TestText 2</p>
                <p> TestText 3</p>
            </div>
            <div className={"v-panel-3 b-hori"}>
                <p> TestText 1</p>
                <p> TestText 2</p>
                <p> TestText 3</p>
            </div>
        </div>
    )
}