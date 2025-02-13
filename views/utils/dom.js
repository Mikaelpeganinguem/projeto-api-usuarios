document.querySelectorAll('.editButton').forEach((button) => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();

        const userId = button.getAttribute('data-id');
        const row = button.closest('tr');

        try {

            const response = await fetch(`http://localhost:3000/api/users/${userId}`);
            const data = await response.json();

            if (!response.ok) {
                alert("Id de usuário não encontrado");
                return;
            }

            

            alert("Dados carregados com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao carregar dados do usuário.");
        }
    });
});

document.querySelectorAll('.deleteButton').forEach((button) => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const userId = button.getAttribute('data-id');
        const row = button.closest('tr');

        try {
            const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                alert("Id de usuário não encontrado");
                return;
            }

            row.remove();
            alert("Usuário excluído com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao excluir o usuário.");
        }
    });
});

