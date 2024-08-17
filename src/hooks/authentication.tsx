import { useEffect, useState } from "react";
interface AuthProps {
  children: React.ReactNode;
}
function Auth({ children }: AuthProps) {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const passd = "1234";
  const handleAuth = () => {
    setAuth(pass === passd);
    validateCredential(auth);
  };
  const validateCredential = (auth: boolean) => {
    const inputArea = document.querySelector(".passInput");
    const div = document.createElement("div");
    const b = document.createElement("b");
    b.className = "authAlert";
    b.innerText = "Invalied Password!!!";
    div.appendChild(b);
    if (!auth) {
      inputArea?.appendChild(div);
    }
  };
  if (!auth) {
    return (
      <section className="RootAuth center" id="popup1">
        <div className="popupContainer ">
          <a href="#" className="close text-white " id="closePopup">
            &times;
          </a>
          <div className="InputCredentialContainer ">
            <p>This service is only for root user!</p>

            <div className="rootPass h-10 bg-white  center">
              <input
                type="Password"
                placeholder=""
                className=" h-full"
                id="passField"
                onChange={(e) => {
                  setPass(e.target.value);
                  console.log(pass);
                }}
              />
              <label htmlFor="passField">Password</label>
            </div>
            <button className="h-10 bg-yellow-400 " onClick={handleAuth}>
              Verify
            </button>
          </div>
        </div>
      </section>
    );
  }
  return <div>{children}</div>;
}

export default Auth;
