document.querySelectorAll('.editButton').forEach((button) => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log("Botão Editar clicado!"); // Verifique no console

        const userId = button.getAttribute('data-id'); // Obtenha o ID do usuário
        console.log(`ID do usuário: ${userId}`); // Verifique se o ID está correto

        try {
            const response = await fetch(`http://localhost:3000/api/users/${userId}`);
            if (!response.ok) {
                alert("Id de usuário não encontrado");
                return;
            }

            const data = await response.json();

            document.getElementById('username').value = data.username;
            document.getElementById('email').value = data.email;
            document.getElementById('password').type = 'text';
            document.getElementById('password').value = data.password;

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
        console.log("Botão Excluir clicado!"); // Verifique no console

        const userId = button.getAttribute('data-id'); // Obtenha o ID do usuário
        console.log(`ID do usuário: ${userId}`); // Verifique se o ID está correto

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

            alert("Usuário excluído com sucesso!");
            location.reload();
        } catch (error) {
            console.error(error);
            alert("Erro ao excluir os dados do usuário.");
        }
    });
});
