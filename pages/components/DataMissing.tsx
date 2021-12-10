import NextHead from "next/head";

interface Props {
  data?: string;
  title?: string;
}

export default function DataMissing(props: Props): JSX.Element {
  const { data, title } = props;

  return (
    <div>
        <p>Data missing..from payment intiating page</p>
    </div>
  );
}