import React, { useEffect } from "react"; //useState for context api and hook, in redux we don't need it
import { connect } from "react-redux";
import { getLogs } from "../../action/logAction";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/logs");
  //   const data = await res.json();

  //   setLogs(data);
  //   setLoading(false);
  // };

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
