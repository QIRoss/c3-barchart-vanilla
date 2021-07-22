const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const req = new XMLHttpRequest();

req.open('GET', url)

req.onload = () => {
    data = JSON.parse(req.responseText).data;
    const dates = data.map(i => i[0]);
    const values = data.map(i => i[1]);
    const chart = c3.generate({
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 100
        },
        bindto: '#chart',
        data: {
            columns: [
                ['data', ...values],
            ],
            types: {
                data: 'bar'
            }
        },
        bar: {
            width: {
                ratio: .87
            }
        },
        axis: {
            y: {
                label: {
                    text: 'Value',
                    position: 'outer-middle'
                }
            }
        }
    })
}

req.send();