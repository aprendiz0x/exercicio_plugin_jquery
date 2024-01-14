$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $("form").validate({
        rules: {
            nomeCompleto: "required",
            email: {
                required: true,
                email: true
            },
            telefone: "required",
            cpf: "required",
            endereco: "required",
            cep: "required"
        },
        messages: {
            nomeCompleto: "Por favor, insira seu nome completo",
            email: {
                required: "Por favor, insira um endereço de email",
                email: "Por favor, insira um endereço de email válido"
            },
            telefone: "Por favor, insira seu telefone",
            cpf: "Por favor, insira seu CPF",
            endereco: "Por favor, insira seu endereço",
            cep: "Por favor, insira seu CEP"
        },
        submitHandler: function(form) {
            var nomeCompleto = $('#nomeCompleto').val();
            var email = $('#email').val();
            var telefone = $('#telefone').val();
            var cpf = $('#cpf').val();
            var endereco = $('#endereco').val();
            var cep = $('#cep').val();

            var novaLinha = '<tr style="display:none;"><td>' + nomeCompleto + '</td><td>' + email + '</td><td>' + telefone + '</td><td>' + cpf + '</td><td>' + endereco + '</td><td>' + cep + '</td></tr>';
            
            $('.tabela-cadastro tbody').append(novaLinha);
            $('.tabela-cadastro tr:last').slideToggle('slow');

            form.reset();
        }
    });
});
