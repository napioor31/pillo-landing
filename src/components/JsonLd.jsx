import { Helmet } from 'react-helmet-async';

const JsonLd = ({ schema, id }) => (
  <Helmet>
    <script type="application/ld+json" id={id}>
      {JSON.stringify(schema)}
    </script>
  </Helmet>
);

export default JsonLd;
