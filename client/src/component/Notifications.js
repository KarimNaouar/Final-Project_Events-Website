import React, { useEffect, useState } from "react";
import { GET_ERRORS } from "../actions/types";
import { useSelector, useDispatch } from "react-redux";
import historyuser from "../outils/history";
import { getUsers } from "../actions/adminaction";

function Notifications() {
  const dispatch = useDispatch();
  const [countnotif, setCountnotif] = useState(0);
  const allnotif = useSelector((state) => state.notification.notifications);
  let auth = useSelector((state) => state.auth);
  const users=useSelector(state=>state.admin.users)
  useEffect(() => {
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }, []);

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  return (
      <> 
      {users.length!=0&&<div id="modalnotifall" style={{ padding: 0, margin:0 }}>

            <div style={{ padding: 10 }}>
              <h4 className="center">Notifications Center</h4>
            </div>
              <table>
                <thead>
                  <tr>
                    <th className="center-align">Title</th>
                    <th className="center-align">Content</th>
                    <th className="center-align">Executed by</th>
                    <th className="center-align">Created at</th>
                  </tr>
                </thead>
                <tbody>
                  {allnotif &&
                    allnotif
                      .slice(0)
                      .reverse()
                      .slice(0, 10 + countnotif * 10)
                      .map((el) => {
                        return (
                          <tr key={el._id} className="center-align" style={{ margin: "10px" }}>
                            <td className="center-align" style={{ padding: 10 }}>
                              <span>{el.title}</span>
                            </td>
                            <td className="center-align" style={{ padding: 10 }}>
                              <span className="center-align">{el.content}</span>
                            </td>
                            <td className="center-align" style={{ padding: 10 }}>
                              <span>{"The " +el.role + ": "} {users.find(e=>e._id==el.userId).fname + " "}{users.find(e=>e._id==el.userId).lname}</span> 
                           </td>
                            <td className="center-align" style={{ padding: 10 }}>
                              <span>
                                <i
                                  className=" tiny material-icons"
                                  style={{
                                    transform: "translateY(2px)",
                                    marginRight: 5,
                                  }}
                                >
                                  history
                                </i>
                                {historyuser(el.created_at)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
               <p/>
                {(countnotif + 1) * 10 < allnotif.length && (
                  <div
                    style={{
                      position: "abosolute",
                      background: "cadetblue",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black"
                    }}
                    id="loadMore"
                    className="thb-gp-load-more"
                    data-thb-gp-lm-type="event"
                    data-org-text="MORE"
                    onClick={() => {
                      setCountnotif(countnotif + 1);
                    }}
                  >
                    SHOW MORE
                  </div>
                )}
        </div>}
</>
 
    
  );
}

export default Notifications;