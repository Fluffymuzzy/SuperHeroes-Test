import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import {
  createSuperHero,
  resetSuperHeroErrors,
} from "../../store/superheroSlice/superheroSlice";

import styles from "./CreateHeroPage.module.css";

const CreateHeroPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.superhero);
  const [nickName, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [description, setDescription] = useState("");
  const [phrase, setPhrase] = useState("");
  const [images, setImages] = useState(null);

  const handleCreateHero = useCallback(() => {
    const formData = new FormData();
    formData.append("nickname", nickName);
    formData.append("real_name", realName);
    formData.append("superpowers", superpowers);
    formData.append("origin_description", description);
    formData.append("catch_phrase", phrase);
    formData.append("images", images);

    dispatch(createSuperHero(formData)).then((res) => {
      if (!res.error) {
        navigate(`/superheroes/${res.payload._id}`, { replace: true });
      }
    });
  }, [
    nickName,
    realName,
    dispatch,
    superpowers,
    navigate,
    description,
    phrase,
    images,
  ]);

  useEffect(() => () => dispatch(resetSuperHeroErrors()), [dispatch]);

  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>create superhero</h1>
          <Input
            name="nickname"
            placeholder="nickname"
            errors={errors && errors.nickname && errors.nickname.message}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Input
            name="real_name"
            placeholder="real_name"
            errors={errors && errors.real_name && errors.real_name.message}
            onChange={(e) => setRealName(e.target.value)}
          />
          <Input
            name="superpowers"
            placeholder="superpowers"
            errors={errors && errors.superpowers && errors.superpowers.message}
            onChange={(e) => setSuperpowers(e.target.value)}
          />
          <Input
            name="catch_phrase"
            placeholder="catch_phrase"
            errors={
              errors && errors.catch_phrase && errors.catch_phrase.message
            }
            onChange={(e) => setPhrase(e.target.value)}
          />
          <Input
            name="origin_description"
            placeholder="origin_description"
            errors={
              errors &&
              errors.origin_description &&
              errors.origin_description.message
            }
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            name="images"
            type="file"
            placeholder="images"
            errors={errors && errors.images && errors.images.message}
            onChange={(e) => setImages(e.target.files[0])}
          />
          <button
            onClick={() => {
              handleCreateHero();
            }}
          >
            create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateHeroPage;
