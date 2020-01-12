﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uluru.Models;

namespace Uluru.Data.Users.DTOs
{
    public class UserDetailDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal HourlyWage { get; set; }
        public string UserRole { get; set; }
        public int WorkingGroupId { get; set; }
        public WorkingGroup WorkingGroup {get; set;}
        public int? PositionId { get; set; }
        public Position Position { get; set; }
        public List<WorkEntry> WorkEntries { get; set; }
        public List<WorkingAvailability> WorkingAvailabilities { get; set; }


        public UserDetailDTO(User user)
        {
            Id = user.Id;
            Email = user.Email;
            FirstName = user.FirstName;
            LastName = user.LastName;
            HourlyWage = user.HourlyWage;
            UserRole = user.UserRole.ToString();
            WorkingGroupId = user.WorkingGroupId;
            WorkingGroup = user.WorkingGroup;
            PositionId = user.PositionId;
            Position = user.Position;
            WorkEntries = user.WorkEntries;
            WorkingAvailabilities = user.WorkingAvailabilities;
        }
    }
}
