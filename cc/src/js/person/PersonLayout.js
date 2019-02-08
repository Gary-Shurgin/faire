import { controls } from "../forms/Controls";

const regions = [
    { name: 'constelation', label: 'Constelation', },
    { name: 'midlands',     label: 'Midlands', },
    { name: 'pentamere',    label: 'Pentamere', },
    { name: 'nOaken',       label: 'North Oaken', },
    { name: 'sOaken',       label: 'South Oaken', },
]

const companions = [
    { name: 'chivilary', label: 'Chivilary', control: controls.toggle },
    { name: 'laurel',    label: 'Laruel',    control: controls.toggle },
    { name: 'pelican',   label: 'Pelican',   control: controls.toggle },
    { name: 'defender',  label: 'Defender',  control: controls.toggle },
]

const ranks = [
    { name: 'captain',   label: 'Captain',   control: controls.toggle },
    { name: 'warder',    label: 'Warder',    control: controls.toggle },
    { name: 'forrester', label: 'Forrester', control: controls.toggle },
]

export const fields = [
    { name: 'scaName',    required: true,  label: 'SCA Name', focus: true },
    { name: 'modernName', required: true,  label: 'Modern Name' },
    { name: 'cellPhone',  required: true,  label: 'Cell Phone', },
    { name: 'eMail',      required: true,  label: 'E-mail', },
    { name: 'password',   required: true,  label: 'Password',     control: controls.password },
    { name: 'region',     required: true,  label: 'Region',       control: controls.select, items: regions },
    { name: 'companions', required: false, label: 'Companion of', control: controls.group,  items: companions, group: 'titles' },
    { name: 'ranks',      required: false, label: 'Rank',         control: controls.group,  items: ranks,      group: 'titles' },
    { name: 'notes',      required: false, label: 'Notes',        control: controls.textarea },
    { name: 'lastUpdated', control: controls.date }
]

