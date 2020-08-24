import React from 'react';

// Styles
import { Container } from '../../../../styles/pages/privacidade';

// Components
import HelmetComponent from '../../../../components/Helmet/index';
import LayoutESP from '../../../../components/Routes/ESP/index';

function PrivacidadeESP() {
  return (
    <LayoutESP>
      <Container>
        <HelmetComponent title="POLÍTICAS DE PRIVACIDAD" />

        <article id="container-privacy">
          <h1> POLÍTICAS DE PRIVACIDAD</h1>
          <br />

          <p>
            Esta Política de privacidad está diseñada para ayudarlo
            Comprender qué información recopilamos y cómo la usamos
            información sobre perspect.tech (el `Sitio`).
          </p>

          <br />
          <br />

          <h3> INFORMACIÓN PERSONAL RECOPILADA </h3>
          <br />

          <p>
            Cuando visita el Sitio, recopilamos automáticamente ciertos
            información sobre su dispositivo, incluida información
            sobre su navegador, dirección IP, zona horaria y algunos
            de las cookies instaladas en su dispositivo. Adicionalmente
            Mientras navega por el Sitio, recopilamos información sobre
            las páginas o productos individuales que ve, cuáles
            sitios o términos de búsqueda lo remitieron al Sitio y
            información sobre cómo interactúa con el Sitio. Nos referimos
            a esa información recopilada automáticamente como `Información
            del dispositivo ».
          </p>

          <br />

          <p>
            RECOPILAMOS INFORMACIÓN DEL DISPOSITIVO MEDIANTE LAS SIGUIENTES TECNOLOGÍAS:
          </p>

          <br />

          <p>
            <strong> Cookies </strong>

            son archivos de datos que se colocan en su dispositivo o computadora
            y generalmente incluyen un identificador único anónimo. Para más
            Para obtener información sobre las cookies y cómo deshabilitarlas, visite:

            <a href="http://www.allaboutcookies.org" target="__blank"> http://www.allaboutcookies.org </a>
          </p>

          <br />

          <p>
            <strong> Archivos de registro </strong>

            realizar un seguimiento de las acciones que tienen lugar en el Sitio y
            recopilar datos, incluidos
            su dirección IP, tipo de navegador, proveedor de servicios de Internet,
            páginas de referencia / salida y marcas de tiempo.
          </p>

          <br />

          <p>
            <strong> Balizas web </strong>
            ,

            <strong> etiquetas </strong>
            y

            <strong> píxeles </strong>

            son archivos electrónicos utilizados para registrar información
            sobre cómo navega por el Sitio.
          </p>

          <br />

          <p>
            Además, cuando realiza una compra o intenta realizar una compra
            a través del Sitio, recopilamos cierta información de usted, incluyendo
            su nombre, dirección de facturación, dirección de envío, información
            métodos de pago (incluidos números de tarjeta de crédito, dirección
            dirección de correo electrónico y número de teléfono. información como `Información
            de la orden ». Cuando hablamos de `Información personal` en esta Política
            Privacidad, estamos hablando de información del dispositivo
            e información del pedido.
          </p>

          <br />
          <br />

          <h3> ¿CÓMO USAMOS SU INFORMACIÓN PERSONAL? </h3>
          <br />
          <p>
            Usamos la información del pedido que generalmente recopilamos para
            cumplir con los pedidos realizados en el Sitio (incluido el procesamiento
            su información de pago, la organización del envío y
            proporcionar facturas y / o confirmaciones de pedidos).
          </p>

          <br />

          <p>
            Usamos la información del dispositivo que recopilamos para ayudarnos
            ayudar a rastrear posibles riesgos y fraudes (en particular, su dirección IP)
            y, en general, para mejorar y optimizar nuestro sitio
            (por ejemplo, generar análisis de cómo nuestros clientes
            navegar e interactuar con el Sitio y evaluar el éxito de nuestro
            campañas de marketing y publicidad).
          </p>

          <br />
          <br />

          <h3> SUS DERECHOS </h3>
          <br />

          <p>
            Si es residente europeo, tiene derecho a acceder
            la información personal que tenemos sobre usted y solicitamos
            que su información personal es corregida,
            actualizado o eliminado. Si quieres hacer ejercicio
            este derecho, contáctenos en
            información de contacto a continuación. Además, si tú
            es residente europeo, notamos que somos
            procesar su información para cumplir con los contratos
            que podamos tener con usted (por ejemplo, si realiza un pedido a través del Sitio)
            o para perseguir nuestros intereses comerciales legítimos mencionados anteriormente.
            Además, tenga en cuenta que su información se transferirá fuera
            Europa, incluidos Canadá y Estados Unidos.
          </p>

          <br />
          <br />

          <h3> RETENCIÓN DE DATOS </h3>
          <br />

          <p>
            Cuando realiza un pedido en el Sitio, conservaremos su
            Solicite información para nuestros registros, a menos que
            y hasta que nos solicite que eliminemos esa información.
          </p>

          <br />
          <br />

          <h3> CAMBIOS </h3>
          <br />

          <p>
            Podemos actualizar esta política de privacidad periódicamente
            para reflejar, por ejemplo, cambios en nuestras prácticas
            o por otros motivos operativos, legales o reglamentarios.
          </p>

          <br />
          <br />

          <h3> CONTÁCTENOS </h3>
          <br />

          <p>
            Para más información sobre nuestro
            privacidad si tienes preguntas o quieres hacer
            una queja, contáctenos por correo electrónico
            support@perspect.tech.
          </p>
        </article>
      </Container>
    </LayoutESP>
  );
}

export default PrivacidadeESP;
