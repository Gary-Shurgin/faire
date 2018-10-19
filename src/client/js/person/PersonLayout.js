const regions = [
    { name: 'constelation', label: 'Constelation', },
    { name: 'midlands',     label: 'Midlands', },
    { name: 'pentamere',    label: 'Pentamere', },
    { name: 'nOaken',       label: 'North Oaken', },
    { name: 'sOaken',       label: 'South Oaken', },
]

const companions = [
    { type: 'toggle', name: 'chivilary', label: 'Chivilary', },
    { type: 'toggle', name: 'laurel',    label: 'Laruel', },
    { type: 'toggle', name: 'pelican',   label: 'Pelican', },
    { type: 'toggle', name: 'defender',  label: 'Defender', },
]

const ranks = [
    { type: 'toggle', name: 'captain',   label: 'Captain', },
    { type: 'toggle', name: 'warder',    label: 'Warder', },
    { type: 'toggle', name: 'forrester', label: 'Forrester', },
]

export const fields = [
    { name: 'scaName',    required: true,  label: 'SCA Name', focus: 'autoFocus' },
    { name: 'modernName', required: true,  label: 'Modern Name' },
    { name: 'cellPhone',  required: true,  label: 'Cell Phone', },
    { name: 'eMail',      required: true,  label: 'E-mail', },
    { name: 'password',   required: true,  label: 'Password', },
    { name: 'region',     required: true,  label: 'Region', type: 'select', items: regions },
    { name: 'companions', required: false, label: 'Companion of', type: 'group', items: companions, group: 'titles' },
    { name: 'ranks',      required: false, label: 'Rank', type: 'group', items: ranks, group: 'titles' },
    { name: 'notes',      required: false, label: 'Notes', type: 'textbox'},
]

