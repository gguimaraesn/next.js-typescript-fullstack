const SignInPage = ({ params }: { params: { "sign-in"?: string[] } }) => {
  console.log(params);

  const signInParam =
    params["sign-in"] && params["sign-in"].length > 1
      ? params["sign-in"][1]
      : "default";

  console.log(signInParam);

  return <div>SignInPage : {signInParam}</div>;
};

export default SignInPage;
