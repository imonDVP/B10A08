import PropTypes from "prop-types";

export default function Heading({ title, description }) {
  return (
    <section className="bg-[#9538E2] p-8 text-center text-white">
      <h2 className="mx-auto max-w-screen-lg text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <p className="mx-auto max-w-prose text-sm sm:text-base">{description}</p>
    </section>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};