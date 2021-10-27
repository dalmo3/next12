import Link from 'next/link';

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about/ok'>
        <a>OK</a>
      </Link>
    </div>
  );
}
