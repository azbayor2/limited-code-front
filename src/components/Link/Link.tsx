import module from './Link.module.css';

type LinkProps = {
  className?: string;
  name: string;
  href: string;
};

function Link({ className, name, href }: LinkProps) {
  return (
    <div className={`${module.link} ${className}`}>
      <a href={href} className={module.text}>
        {name}
      </a>
    </div>
  );
}

export default Link;
