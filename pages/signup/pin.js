/* eslint-disable no-return-assign */
import PinInput from 'react-pin-input';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { AiOutlineCheck } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComp from '../../components/ButtonComp';
import AuthPage from '../../components/AuthPage';
import { signup } from '../../redux/actions/auth';

function Pin() {
  const [test, setTest] = useState('');
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  const { registerUser } = useSelector((state) => state);

  const route = useRouter();

  // eslint-disable-next-line no-unused-vars
  let pin;
  const handleConfirm = (e) => {
    e.preventDefault();
    const { fullName, email, password } = registerUser.dataRegist;
    console.log(fullName, email, password, Number(test));
    setStatus(true);
    dispatch(signup(fullName, email, password, Number(test)));
  };
  return (
    <AuthPage
      info={status
        ? (
          <div className="my-5">
            <div className="badge bg-primary rounded rounded-pill py-2 my-5">
              <AiOutlineCheck className="fs-1 fw-bold text-center" />
            </div>
            <h2>Your PIN Was Successfully Created</h2>
            <p className="my-5">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
          </div>
        )
        : (
          <>
            <h2>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h2>
            <p className="my-5">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
          </>
        )}
      form={status
        ? (
          <div className="mt-5">
            <ButtonComp event={() => route.push('/login')} block="true">Login Now</ButtonComp>
          </div>
        )
        : (
          <form>
            <PinInput
              length={6}
              focus
              ref={(n) => (pin = n)}
              onChange={(value) => { setTest(value); }}
              type="numeric"
              inputMode="number"
              style={{ padding: '10px' }}
              inputStyle={{ borderColor: 'white', color: 'white' }}
              inputFocusStyle={{ borderColor: 'teal' }}
              autoSelect
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
            <div className="mt-5">
              <ButtonComp event={handleConfirm} block="true">Confirm</ButtonComp>
            </div>
          </form>
        )}
    />
  );
}

export default Pin;
