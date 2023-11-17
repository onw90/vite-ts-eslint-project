import { useState } from 'react';

type Props = {
  name: string;
  age: number;
};

export const TypeScriptComponent = ({
  age,
  name,
}: Props): JSX.Element | null => {
  const [description, setDescription] = useState('');
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  return (
    <div>
      <h3>Type Script React Component Example</h3>
      <p>
        Data from props: {name} {age}
      </p>
      <label>
        Description field{' '}
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
      <p>Value of Description field is: {description}</p>
      <button onClick={() => setDescription('')}>Clear</button>
    </div>
  );
};
