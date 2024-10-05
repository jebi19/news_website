const Newsitem = ({ title, description, src, url, date }) => {
  return (
    <div className="card m-2" style={{ width: "18rem"}}>
      <img src={src} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Published on: {date}</small></p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
