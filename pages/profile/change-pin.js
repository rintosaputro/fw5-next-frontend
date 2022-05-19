/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
import { Row } from 'react-bootstrap';
import PinInput from 'react-pin-input';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Profile.module.css';
import ButtonComp from '../../components/ButtonComp';
import { changePin } from '../../redux/actions/profile';

function ChangePin() {
  const [code, setCode] = useState();
  const [newCode, setNewCode] = useState();
  const [isContinue, setIsContinue] = useState(false);
  let pin;
  let newPin;

  const dispatch = useDispatch();
  const { changePin: changePinState } = useSelector((state) => state);

  useEffect(() => {
    if (changePinState.isSuccess) {
      setTimeout(() => {
        dispatch({ type: 'CHANGE_PIN_CLEAR' });
      }, 6000);
    }
    if (changePinState.isError) {
      setIsContinue(false);
    }
  }, [changePinState.isSuccess, changePinState.isError]);

  const handleContinue = (e) => {
    e.preventDefault();
    setIsContinue(true);
    pin.clear();
  };

  const handleChange = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    dispatch(changePin(token, code, newCode));
    newPin.clear();
  };

  return (
    <Layout>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4 d-none d-lg-block">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className={`card px-4 py-5 bg-light ${styles.card}`}>
              <h4>Change Pin</h4>
              <p className={`${styles.par} my-4`}>{isContinue ? 'Type your new 6 digits security PIN to use in Zwallet.' : 'Enter your current 6 digits Zwallet PIN below to continue to the next steps.'}</p>
              {changePinState.isSuccess && (
              <div className="mb-3 bg-dark w-75 mx-auto p-3">
                <div className="fs-3 text-center text-primary">Change pin successfully!</div>
              </div>
              )}
              {changePinState.isError && (
              <div className="mb-3 bg-dark w-75 mx-auto p-3">
                <div className="fs-3 text-center text-danger">{changePinState.errMessage}</div>
              </div>
              )}
              {isContinue
                ? (
                  <div className={`${styles.input} mx-auto`}>
                    <PinInput
                      length={6}
                      focus
                      initialValue={null}
                      ref={(v) => (newPin = v)}
                      onChange={(value) => { setNewCode(value); }}
                      type="numeric"
                      inputMode="number"
                      style={{ padding: '10px' }}
                      inputStyle={{ borderColor: 'white', color: 'white' }}
                      inputFocusStyle={{ borderColor: 'teal' }}
                      autoSelect
                      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                    {changePinState.isLoading ? (
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border mt-5" role="status" />
                      </div>
                    ) : ((newCode && newCode.length === 6)
                      ? <ButtonComp event={handleChange} cls="mt-5" display="true">Change Pin</ButtonComp>
                      : <ButtonComp cls="mt-5 bg-dark text-muted" display="true">Change Pin</ButtonComp>)}
                  </div>
                )
                : (
                  <div className={`${styles.input} mx-auto`}>
                    <PinInput
                      length={6}
                      focus
                      ref={(n) => (pin = n)}
                      onChange={(value) => { setCode(value); }}
                      type="numeric"
                      inputMode="number"
                      style={{ padding: '10px' }}
                      inputStyle={{ borderColor: 'white', color: 'white' }}
                      inputFocusStyle={{ borderColor: 'teal' }}
                      autoSelect
                      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                    {(code && code.length === 6)
                      ? <ButtonComp event={handleContinue} cls="mt-5" display="true">Countinue</ButtonComp>
                      : <ButtonComp cls="mt-5 bg-dark text-muted" display="true">Countinue</ButtonComp>}
                  </div>
                )}
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default ChangePin;
