import "./MyCheckboxStyles.css";

const MyCheckbox = ({
  title,
  onChange,
  checked = false,
}: {
  title: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}): JSX.Element => {
  return (
    <>
      <div className="uv-checkbox-wrapper">
        <input
          onChange={onChange}
          type="checkbox"
          checked={checked}
          id={title}
          className="uv-checkbox"
        />
        <label htmlFor={title} className="uv-checkbox-label">
          <div className="uv-checkbox-icon">
            <svg viewBox="0 0 24 24" className="uv-checkmark">
              <path d="M4.1,12.7 9,17.6 20.3,6.3" fill="none"></path>
            </svg>
          </div>
          <span className="uv-checkbox-text">{title}</span>
        </label>
      </div>
    </>
  );
};

export default MyCheckbox;
