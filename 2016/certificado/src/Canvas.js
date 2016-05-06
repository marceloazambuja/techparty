import React from 'react';
import ReactDOM from 'react-dom';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvasData: this.props.canvasData
    };
  }

  formatDate(date) {
    let time = new Date(date);

    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();

    return `${day}/0${month}/${year}`;
  }

  componentDidMount() {
    var canvas = ReactDOM.findDOMNode(this.refs.canvas),
      ctx = canvas.getContext('2d'),
      faccatImage = new Image(),
      techpartyImage = new Image(),
      signImage = new Image(),
      cWidth = canvas.width,
      cHeight = canvas.height,
      xCenter = canvas.width / 2,
      yCenter = canvas.height / 2;

    faccatImage.src = 'data:image/png;base64,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';
    techpartyImage.src = 'data:image/png;base64,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';
    signImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABMCAIAAAAqdihTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABClSURBVHhe7dxlrNxWEwbgqv1RtVWZuVVBZWZmZmZmZmZKmZmTMjMmZWZIyszMzN+j71SuZXvXXq+9e29098dVtHt8YOCdd2aOM8w/fZ+uSmCYrq7et/g/Q5sCPv/88xNPPPHJJ5/sLbodqhTwySefrL/++ssss8xnn33Wp4BOS+DDDz/caKONJplkkssuu6zTa7ex3lDiAW+//fbGG2880UQTLbfccj/++GNLAvn555/vvPPOnXfe2SQtPVjJ4KFBAd98880WW2yxww47bLjhhldffXVLchk8ePDll1/ucZp78803W3q2ksG9XgHff//9Hv//DBo0yN+PPvqooFyI+8Ybb7z00ktff/31559//rDDDvvyyy8LPlvhsN6tACLbc889N998cwHgwgsvvOWWWwqK5qGHHlpyySXPOOOMP//80yMnnHDC4Ycf/vvvvxd8vMJhvVgBwfahxxdffDFw4MAzzzwTmhcRDatfbLHFjj766BAtnnvuuQ022OCZZ54p8mzlY3qrAn744Yd99913q622+u677+D4fvvt98EHH+RK59tvvz3iiCPmmWee888/P9j+X3/9deyxx5522mm5z9Y0oLcq4Kijjtpyyy1BEPvdbbfdnnjiiVwBvfDCC6utttrss89+8803R4MfeeQRqcM777wTvpFA8KfcqYAVC/j7779zR+YO6KYCyM75M7fobMLpr7/+mvnrtddei/MQ1iuvvHLccccJobnnPO+881ZZZZW999778ccfjw/ea6+9rrzySt/cd999/fv3x4iGDBmSO5tMmxZ7twLuvvtuYdCZ06cF5cS64447fvrpp+lfH3zwQaIE2USp6pBLXVg0sFp44YUTIRoEib2zzTYbrdx1113vvfceF5FL//bbb7kKMGdxutV8tu54wKOPPrrgggsiMOmkCTvceuutyUtcDTAd/7z88strrLEGss9OjznmmI8//rj58R544AHjKeyll16KRgbLRVvXXnttf0kTnuQKvaYBXVDAPffcM99882222WZoTOJUXHuJJZZQzKGh9IFpC9z369fv9ttvhxVfffVVc6EYhu2IsYEdUSe1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';

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, cWidth, cHeight);

    ctx.drawImage(faccatImage, 40, 25);
    ctx.drawImage(techpartyImage, cWidth - 180, 10);
    ctx.drawImage(signImage, xCenter - 64, cHeight - 205 );

    ctx.font = 'bold 50px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.fillText('Certificado de participação', xCenter, 163);

    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Este certificado está sendo conferido à', xCenter, 223);

    ctx.font = 'bold 40px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(this.state.canvasData.name, xCenter, 290);

    // username underline
    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(970, 300);
    ctx.stroke();

    // assinatura underline
    ctx.beginPath();
    ctx.moveTo(710, cHeight - 125);
    ctx.lineTo(450, cHeight - 125);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';

    if (this.state.canvasData.isSpeaker) {
      ctx.fillText(`Conferimos o presente certificado à ${this.state.canvasData.name} por ter ministrado`, xCenter, 383);
      ctx.fillText(`a palestra "${this.state.canvasData.talk}" durante a TechParty 2016`, xCenter, 410);
      ctx.fillText(`promovida pela Faculdades Integradas de Taquara no dia ${this.formatDate(this.state.canvasData.date)}, totalizando 50 minutos.`, xCenter, 437);
    }

    if (!this.state.canvasData.isSpeaker) {
      ctx.fillText('Certificamos sua participação na TechParty Faccat, realizada entre', xCenter, 383);
    }

    if (!this.state.canvasData.isSpeaker) {
      ctx.fillText(`25 e 29 de Abril de 2016, na cidade de Taquara/RS, totalizando ${this.state.canvasData.totalTime} horas.`, xCenter, 410);
    }

    ctx.font = '18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Prof. Dr. Marcelo Azambuja', xCenter, cHeight - 100);

    ctx.font = '18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Coordenador do Curso de Bacharelado em Sistemas de Informação', xCenter, cHeight - 70);

    ctx.font = '18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Coordenador do Curso de Tecnólogo em Sistemas para Internet', xCenter, cHeight - 45);

    this.props.onFinished({encoded: canvas.toDataURL('image/png')})
  }

  render() {
    return (
      <canvas ref="canvas" width="1170" height="690"></canvas>
    );
  }
}
