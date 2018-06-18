const regions = [
    { id: 'constelation', view: 'Constelation', },
    { id: 'midlands',     view: 'Midlands', },
    { id: 'pentamere',    view: 'Pentamere', },
    { id: 'nOaken',       view: 'North Oaken', },
    { id: 'sOaken',       view: 'South Oaken', },
]

const companions = [
    { type: 'toggle', id: 'chivilary',    view: 'Chivilary', },
    { type: 'toggle', id: 'laurel',       view: 'Laruel', },
    { type: 'toggle', id: 'pelican',      view: 'Pelican', },
    { type: 'toggle', id: 'defender',     view: 'Defender', },
]

const ranks = [
    { type: 'toggle', id: 'captain',      view: 'Captain', },
    { type: 'toggle', id: 'warder',       view: 'Warder', },
    { type: 'toggle', id: 'forrester',    view: 'Forrester', },
]

export const fields = [
    { id: 'scaName',    required: true,  label: 'SCA Name', focus: 'autoFocus' },
    { id: 'modernName', required: true,  label: 'Modern Name', },
    { id: 'cellPhone',  required: true,  label: 'Cell Phone', },
    { id: 'eMail',      required: true,  label: 'E-mail', },
    { id: 'password',   required: true,  label: 'Password', },
    { id: 'notes',      required: false, label: 'Notes', type: 'textbox'},
    { id: 'region',     required: true,  label: 'Region', type: 'select', items: regions, },
    { id: 'companions', required: false, label: 'Companion of', type: 'group', items: companions, },
    { id: 'ranks',      required: false, label: 'Rank', type: 'group', items: ranks, },
]

