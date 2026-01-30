const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();

  if (name && description && needed_funding) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, description, needed_funding }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

const newProjectForm = document.querySelector('.new-project-form');
if (newProjectForm) {
  newProjectForm.addEventListener('submit', newFormHandler);
}

const projectList = document.querySelector('.project-list');
if (projectList) {
  projectList.addEventListener('click', delButtonHandler);
}
