function fromJSONToHTMLTable(input) {
    let parsed = JSON.parse(input);

    function escapeHTML(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
    
    let htmlTable = '<table>\n';
    
    if (parsed.length > 0) {
        htmlTable += '   <tr>';
        let keys = Object.keys(parsed[0]);
        
        for (let key of keys) {
            htmlTable += `<th>${escapeHTML(key)}</th>`;
        }
        htmlTable += '</tr>\n';
        
        for (let obj of parsed) {
            htmlTable += '   <tr>';
            
            for (let key of keys) {
                htmlTable += `<td>${escapeHTML(obj[key])}</td>`;
            }
            htmlTable += '</tr>\n';
        }
    }
    
    htmlTable += '</table>';
    
    return htmlTable;
}


/*fromJSONToHTMLTable(`[{"Name":"Pesho",

"Score":4,

" Grade":8},

{"Name":"Gosho",

"Score":5,

" Grade":8},

{"Name":"Angel",

"Score":5.50,

" Grade":10}]`);*/