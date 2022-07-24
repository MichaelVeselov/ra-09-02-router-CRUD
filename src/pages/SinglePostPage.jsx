function SinglePostPage(props) {
  const { title, buttons, closeWindow } = props;

  const elements = buttons.map((button) => {
    return (
      <button
        key={button.btnTitle}
        className={button.className}
        onClick={button.btnOnClick}
      >
        {button.btnTitle}
      </button>
    );
  });

  return (
    <div className='card me-5 w-100'>
      <div className='card-header d-flex flex-nowrap justify-content-between align-items-center'>
        <div>{title}</div>
        <div>
          <button className='btn fs-3' onClick={closeWindow}>
            ×
          </button>
        </div>
      </div>
      <div className='card-body'>{props.children}</div>
      <div className='d-flex flex-nowrap justify-content-end'>{elements}</div>
    </div>
  );
}

export { SinglePostPage };
