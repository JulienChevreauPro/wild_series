import PropTypes from "prop-types";

function ProgramDescription({ programs }) {
// console.log(programs)
  return (
    <ul>
      {programs.map((program) => (
        <>
        <li key={program.id}>{program.title}</li>
          <li key={program.id}>{program.poster}</li>
          <li key={program.id}>{program.synopsis}</li>          
          <li key={program.id}>{program.country}</li>
          <li key={program.id}>{program.year}</li>
          </>
      ))}
    </ul>
  );
}

ProgramDescription.propTypes = {
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProgramDescription;