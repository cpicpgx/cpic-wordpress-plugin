const FileTypeEnum = {
  ALLELE_DEFINITION: 'Allele Definition Table',
  ALLELE_FUNCTION_REFERENCE: 'Allele Functionality Table',
  ALLELE_SUMMARY: 'Allele Summary',
  DIPLOTYPE_PHENOTYPE: 'Diplotype-Phenotype Table',
  DRUG_RESOURCE: 'Drug Reference',
  DRUG_REVIEW: 'Drug Review',
  FLOWCHART: 'Flow Chart',
  FREQUENCY: 'Frequency Table',
  GENE_CDS: 'Gene Consult',
  GENE_PHENOTYPE: 'Gene Phenotype Table',
  GENE_RESOURCE: 'Gene Resource',
  GUIDELINE: 'Guideline',
  PAIR: 'Pair',
  PHARMVAR: 'PharmVar',
  RECOMMENDATION: 'Recommendation Table',
  TERM: 'Term',
  TEST_ALERT: 'Pre- and Post-Test Alerts',
  PAIR_DIFF: 'CPIC Pair Diff',
};

const list = document.getElementById("logList");
fetch('https://api.cpicpgx.org/v1/change_log_view?order=date.desc')
  .then(resp => resp.json())
  .then(data => {
    const newItem = document.createElement('li');
    newItem.textContent = data.length;

    let listHtml = '';
    for (let logData of data) {
      listHtml += `<li style="margin-bottom: 1rem"><a href="https://github.com/cpicpgx/cpic-data/releases/tag/${logData.deployedrelease}">${logData.deployedrelease}</a> ${logData.entityname} [${FileTypeEnum[logData.type] || logData.type}]: <div style="padding-left: .5rem">${logData.note}</div></li>`
    }

    list.innerHTML = listHtml;
  });
