// 初期画面をChakra UI化．だいたい理解したら消してもOKなファイル
import { Box, Button, Input } from "@chakra-ui/react";
import { invoke } from "@tauri-apps/api/tauri";
import { Form, Formik } from "formik";
import { useState } from "react";
import "./App.css";

function Chutorial() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Box>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={() => {
          // Formikはデフォルトでフォームの送信時にページのリロードを防ぐように設計されているのでpreventDefaultは不要
          greet();
        }}
      >
        <Form className="row">
          <Input
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <Button type="submit">Greet</Button>
        </Form>
      </Formik>
      <p>{greetMsg}</p>
    </Box>
  );
}

export default Chutorial;
