"use client";

import React, { useState } from "react";
import Link from "next/link";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  StyledCheckboxContainer,
  StyledCheckboxInput,
  StyledCheckboxText,
  StyledContainer,
  StyledForgotPasswordLien,
  StyledFrm,
  Form,
  StyledFrmInput,
  StyledFrmLabel,
  StyledIcon,
  StyledInfo,
  StyledInput,
  StyledLogoContainer,
  StyledSignupLien,
  StyledSubmitButton,
  StyledText,
  IconDivBtn,
  PwdDiv,
} from "../../styles/Connexion.Style";
import axios from "axios";

const Connexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" }); // Corrected field name
  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://test-product-69xz.onrender.com/api/auth/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Connexion réussie");
      router.push("/homePage");
    } catch (error) {
      console.error(error);
      toast.error("Identifiants invalides");
    }
  };


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledIcon>
            <Image src={iconRed} alt="logo Red" />
          </StyledIcon>
          <StyledText>Red Product</StyledText>
        </StyledLogoContainer>
        <Form>
          <StyledFrm onSubmit={handleSubmit}>
            <StyledInfo>Connectez-vous en tant qu'admin</StyledInfo>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="email">Email</StyledFrmLabel>
              <StyledInput
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
            </StyledFrmInput>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="password">Mot de passe</StyledFrmLabel>
              <PwdDiv>
                <StyledInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                />
                <IconDivBtn type="button" onClick={toggleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash } />
                </IconDivBtn>
              </PwdDiv>
            </StyledFrmInput>
            <StyledCheckboxContainer>
              <StyledCheckboxInput
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
              />
              <StyledCheckboxText>Garder-moi connecté</StyledCheckboxText>
            </StyledCheckboxContainer>
            <StyledSubmitButton type="submit">Se connecter</StyledSubmitButton>
          </StyledFrm>
        </Form>
        <Link href="/forgotpwd">
          <StyledForgotPasswordLien>
            Mot de passe oublié?
          </StyledForgotPasswordLien>
        </Link>
        <StyledSignupLien>
          Vous n'avez pas de compte?{" "}
          <Link href="/inscription">Inscription</Link>
        </StyledSignupLien>

        <ToastContainer />
      </StyledContainer>
    </>
  );
};

export default Connexion;
