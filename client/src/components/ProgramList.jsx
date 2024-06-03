import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProgramList({ programs }) {

  return (
    <ul>
      { programs.map((program) => (
        <li key={program.id}>
          <Link to={`/programs/${program.id}`}>{program.title}</Link>
          </li>
      ))}
    </ul>
  );
}

ProgramList.propTypes = {
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default ProgramList;