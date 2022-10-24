import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

import styles from "./CreateHeroPage.module.css";

const CreateHeroPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)} isBackButton={true}>
        back
      </button>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>create superhero</h1>
          <Input name="nickname" placeholder="nickname" onChange={() => null} />
          <Input
            name="real_name"
            placeholder="real_name"
            onChange={() => null}
          />
          <Input
            name="superpowers"
            placeholder="superpowers"
            onChange={() => null}
          />
          <Input
            name="catch_phrase"
            placeholder="catch_phrase"
            onChange={() => null}
          />
          <Input
            name="origin_description"
            placeholder="origin_description"
            onChange={() => null}
          />
          <Input
            name="images"
            type="file"
            placeholder="images"
            onChange={() => null}
          />
          <button onClick={() => null}>create</button>
        </form>
      </div>
    </>
  );
};

export default CreateHeroPage;
