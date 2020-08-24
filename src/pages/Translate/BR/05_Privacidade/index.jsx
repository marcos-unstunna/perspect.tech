import React from 'react';

// Styles
import { Container } from '../../../../styles/pages/privacidade';

// Components
import HelmetComponent from '../../../../components/Helmet/index';
import LayoutBR from '../../../../components/Routes/BR/index';

function Privacidade() {
  return (
    <LayoutBR>
      <Container>
        <HelmetComponent title="POLÍTICA DE PRIVACIDADE" />

        <article id="container-privacy">
          <h1>POLÍTICAS DE PRIVACIDADE</h1>
          <br />

          <p>
            Esta Política de Privacidade destina-se a ajudar você a
            entender quais informações coletamos e como usamos essas
            informações em perspect.tech (o `Site`).
          </p>

          <br />
          <br />

          <h3>INFORMAÇÕES PESSOAIS COLETADAS</h3>
          <br />

          <p>
            Quando você visita o Site, coletamos automaticamente certas
            informações sobre o seu dispositivo, incluindo informações
            sobre o seu navegador, endereço IP, fuso horário e alguns
            dos cookies instalados no seu dispositivo. Além disso, à
            medida que você navega no Site, coletamos informações sobre
            as páginas ou produtos individuais que você visualiza, quais
            sites ou termos de pesquisa o encaminharam para o Site e
            informações sobre como você interage com o Site. Nós nos referimos
            a essas informações coletadas automaticamente como `Informações
            do dispositivo`.
          </p>

          <br />

          <p>
            COLETAMOS INFORMAÇÕES DO DISPOSITIVO USANDO AS SEGUINTES TECNOLOGIAS:
          </p>

          <br />

          <p>
            <strong>Cookies</strong>
            {' '}
            são arquivos de dados que são colocados no seu dispositivo ou computador
            e geralmente incluem um identificador exclusivo anônimo. Para mais
            informações sobre cookies e como desativar os cookies, visite:
            {' '}
            <a href="http://www.allaboutcookies.org" target="__blank">http://www.allaboutcookies.org</a>
          </p>

          <br />

          <p>
            <strong>Log files</strong>
            {' '}
            rastreiam as ações que ocorrem no Site e coletam dados, incluindo
            seu endereço IP, tipo de navegador, provedor de serviços de Internet,
            páginas de referência / saída e carimbos de data / hora.
          </p>

          <br />

          <p>
            <strong>Web beacons</strong>
            ,
            {' '}
            <strong>tags</strong>
            , e
            {' '}
            <strong>pixels</strong>
            {' '}
            são arquivos eletrônicos usados ​​para registrar informações
            sobre como você navega no Site.
          </p>

          <br />

          <p>
            Além disso, quando você faz uma compra ou tenta fazer uma compra
            através do Site, coletamos algumas informações suas, incluindo
            seu nome, endereço de cobrança, endereço de entrega, informações
            de pagamento (incluindo números de cartão de crédito, endereço
            de email e número de telefone. a essas informações como `Informações
            do pedido`. Quando falamos sobre `Informações pessoais` nesta Política
            de Privacidade, estamos falando sobre Informações do dispositivo
            e Informações do pedido.
          </p>

          <br />
          <br />

          <h3>COMO UTILIZAMOS SUAS INFORMAÇÕES PESSOAIS?</h3>
          <br />
          <p>
            Usamos as Informações do Pedido que coletamos geralmente para
            atender a pedidos feitos pelo Site (incluindo o processamento
            de suas informações de pagamento, a organização do envio e
            o fornecimento de faturas e / ou confirmações de pedidos).
          </p>

          <br />

          <p>
            Usamos as Informações do dispositivo que coletamos para nos
            ajudar a rastrear possíveis riscos e fraudes (em particular, o seu endereço IP)
            e, de maneira mais geral, para melhorar e otimizar nosso Site
            (por exemplo, gerando análises sobre como nossos clientes
            navegam e interagem com Site e avaliar o sucesso de nossas
            campanhas de marketing e publicidade).
          </p>

          <br />
          <br />

          <h3>SEUS DIREITOS</h3>
          <br />

          <p>
            Se você é um residente europeu, tem o direito de acessar
            as informações pessoais que temos sobre você e solicitar
            que suas informações pessoais sejam corrigidas,
            atualizadas ou excluídas. Se você deseja exercer
            esse direito, entre em contato conosco através das
            informações de contato abaixo. Além disso, se você
            é um residente europeu, notamos que estamos
            processando suas informações para cumprir contratos
            que possamos ter com você (por exemplo, se você fizer um pedido através do Site)
            ou para perseguir nossos interesses comerciais legítimos listados acima.
            Além disso, observe que suas informações serão transferidas para fora
            da Europa, inclusive para o Canadá e os Estados Unidos.
          </p>

          <br />
          <br />

          <h3>RETENÇÃO DE DADOS</h3>
          <br />

          <p>
            Quando você faz um pedido pelo Site, manteremos suas
            Informações de Pedido para nossos registros, a menos
            e até que você nos peça para excluir essas informações.
          </p>

          <br />
          <br />

          <h3>ALTERAÇÕES</h3>
          <br />

          <p>
            Podemos atualizar esta política de privacidade periodicamente
            para refletir, por exemplo, alterações em nossas práticas
            ou por outros motivos operacionais, legais ou regulatórios.
          </p>

          <br />
          <br />

          <h3>CONTATE-NOS</h3>
          <br />

          <p>
            Para obter mais informações sobre nossas práticas de
            privacidade, se você tiver dúvidas ou quiser fazer
            uma reclamação, entre em contato conosco pelo e-mail
            suporte@perspect.tech.
          </p>
        </article>
      </Container>
    </LayoutBR>
  );
}

export default Privacidade;
